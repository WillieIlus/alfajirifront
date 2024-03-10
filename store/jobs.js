import { defineStore } from 'pinia'
import { BASE_URL } from './base'
import { useAccountStore } from './accounts'

export const useJobStore = defineStore('job', {
  state: () => ({
    jobs: [],
    currentPage: 1,
    itemsPerPage: 8,
    job: null,
    loading: false,
    error: null,
    query: "",
  }),
  getters: { 
    paginatedJobs: (state) => {
      const startIndex = (state.currentPage - 1) * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;
      return state.jobs.slice(startIndex, endIndex);
    },
    totaljobs: (state) => state.jobs.length,
    totalPages: (state) => Math.ceil(state.jobs.length / state.itemsPerPage),
  },
  actions: {
    async handleError(action) {
      this.loading = true;
      try {
        await action();
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    async fetchJobs(filters = {}) {
      await this.handleError(async () => {
        const queryString = Object.entries(filters)
          .map(([key, value]) => `${key}=${value}`)
          .join('&');

        const response = await fetch(`${BASE_URL}/jobs?${queryString}`);
        const data = await response.json();
        this.jobs = data;
      });
    },

    async fetchJobsByUser() {
      await this.handleError(async () => {
        const response = await fetch(`${BASE_URL}/jobs/my`);
        const data = await response.json();
        this.jobs = data;
      });
    },

    async fetchMyJobs() {
      await this.handleError(async () => {
        const accountStore = useAccountStore();
        const response = await fetch(`${BASE_URL}/jobs/my`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accountStore.token}`,
          },
        });
        const data = await response.json();
        this.jobs = data;
      });
    },

    async fetchJob(slug) {
      await this.handleError(async () => {
        const response = await fetch(`${BASE_URL}/jobs/${slug}`);
        const data = await response.json();
        this.job = data;
      });
    },


    async createJob(data) {
      try {
        const accountStore = useAccountStore();
        const token = accountStore.token;
        const headers = {
          'Authorization': 'Bearer ' + token
        };
        const response = await fetch(`${BASE_URL}/jobs/`, {
          method: 'POST',
          headers: headers,
          body: data,
        }); 
        console.log('The response is:', response);
        if (!response.ok) {
          throw new Error('Server responded with ' + response.status);
        }
        const responseData = await response.json();
        console.log('The received data is:', responseData )
      } catch (error) {
        console.error('Error submitting form:', error);
        this.error = error;
      }
    },

    async updateJob(slug, job) {
      this.loading = true;
      const accountStore = useAccountStore();
      try {
        const response = await fetch(`${BASE_URL}/jobs/${slug}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accountStore.token}`,
          },
          body: JSON.stringify(job),
        });
        const data = await response.json();
        this.jobs = this.jobs.map((job) => {
          if (job.slug === slug) {
            return data;
          }
          return job;
        });
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    async deleteJob(slug) {
      await this.handleError(async () => {
        await fetch(`${BASE_URL}/jobs/${slug}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        });
        this.jobs = this.jobs.filter((job) => job.slug !== slug);
      });
    },
    setCurrentPage(page) {
      const totalPages = Math.ceil(this.jobs.length / this.itemsPerPage);
      this.currentPage = Math.max(1, Math.min(totalPages, page));
    },
  },
})
