import axios from "axios";

/**
 * @class DB
 *
 * Class to access the content database.
 *
 * @property siteId{Number}     Content site ID for resolving
 * @property host{String}       Backend REST API host
 * @property apiKey{String}     API key for backend access
 */
class DB {
    constructor(siteId, host, apiKey) {
        this.siteId = siteId;
        this.host = host;
        axios.defaults.headers.common["x-api-key"] = apiKey;
    }

    /**
     * Get the page data (joined with site data for convenience)
     *
     * @param pageId{Number}    ID of page to fetch
     * @returns {Promise<PageData|SiteData>}
     */
    async getPageData(pageId) {
        try {
            const response = await axios.get(`${this.host}/api/v1/content/pages/${pageId}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching page ${pageId}.`, error);
        }
    }

    /**
     * Get the array of page sections.
     *
     * @param pageId{Number}    ID of page to fetch
     * @returns {Promise<[PageSectionData]>}
     */
    async getPageSections(pageId) {
        try {
            const response = await axios.get(`${this.host}/api/v1/content/pages/${pageId}/sections`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching page ${pageId} sections.`, error);
        }
    }

    /**
     * Get the site navigation outline.
     *
     * @returns {Promise<[OutlineData]>}
     */
    async getSiteOutline() {
        try {
            const response = await axios.get(`${this.host}/api/v1/content/sites/${this.siteId}/outline`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching site ${this.siteId} outline.`, error);
        }
    }

    /**
     * Get the site navigation outline.
     *
     * @returns {Promise<SiteData>}
     */
    async getSiteData() {
        try {
            const response = await axios.get(`${this.host}/api/v1/content/sites/${this.siteId}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching site data. siteId=${this.siteId}`, error);
        }
    }

    /**
     * Get the guest book configuration.
     *
     * @param guestBookId{Number}
     * @returns {Promise<GuestBookConfig>}
     */
    async getGuestBook(guestBookId) {
        try {
            const response = await axios.get(`${this.host}/api/v1/guestbook/${guestBookId}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching guestbook. guestBookId=${guestBookId}`, error);
        }
    }

    /**
     * Post guest data and feedback data in one shot.
     *
     * @param guestBookId {Number}
     * @param data {GuestData|GuestFeedbackData}
     * @return {Promise<GuestData|GuestFeedbackData>}
     */
    async postGuestBookFeedback(guestBookId, data) {
        try {
            const guestResponse = await this.postGuestData(guestBookId, data);
            const feedbackResponse = await this.postFeedbackData(guestBookId, guestResponse.GuestID, data)
            return {
                ...guestResponse,
                ...feedbackResponse
            }
        } catch (error) {
            console.error(`Error fetching guestbook. guestBookId=${guestBookId}, data=${JSON.stringify(data)}`, error);
        }
    }

    /**
     * Retrieve guest data
     *
     * @param guestId {Number}
     * @return {Promise<GuestData>}
     */
    async getGuestData(guestId) {
        try {
            const response = await axios.get(`${this.host}/api/v1/guestbook/guest/${guestId}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching guest data. guestId=${guestId}`, error);
        }
    }

    /**
     * Post guest data
     *
     * @param guestBookId {Number}
     * @param data {GuestData}
     * @return {Promise<GuestData>}
     */
    async postGuestData(guestBookId, data) {
        try {
            const response = await axios.post(`${this.host}/api/v1/guestbook/${guestBookId}/guest`, data);
            return response.data;
        } catch (error) {
            console.error(`Error posting guest data. guestBookId=${guestBookId}, data=${JSON.stringify(data)}`, error);
        }
    }

    /**
     * Retrieve guest feedback
     *
     * @param guestFeedbackId {Number}
     * @return {Promise<GuestFeedbackData>}
     */
    async getFeedbackData(guestFeedbackId) {
        const response = await axios.get(`${this.host}/api/v1/guestbook/feedback/${guestFeedbackId}`);
        return response.data;
    }

    /**
     * Submit guest feedback
     *
     * @param guestBookId {Number}
     * @param guestId {Number}
     * @param data {GuestFeedbackData}
     * @return {Promise<GuestFeedbackData>}
     */
    async postFeedbackData(guestBookId, guestId, data) {
        const response = await axios.post(`${this.host}/api/v1/guestbook/${guestBookId}/guest/${guestId}/feedback`, data);
        return response.data;
    }
}

export default DB;


