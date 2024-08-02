<script>
    /** @type {import('./$types').PageData} */
    export let data;

    /**
     * Converts Unix timestamp to a readable date string
     * @param {string} timestamp - Unix timestamp in seconds
     * @returns {string} Formatted date string
     */
    function formatDate(timestamp) {
        const date = new Date(parseFloat(timestamp) * 1000);
        return date.toLocaleString();
    }
</script>

<main>
    <h1>Messages</h1>
    <ul>
        {#each data.messages as message}
            <li>
                <div class="message-header">
                    <span class="user">{message.user}</span>
                    <span class="timestamp">{formatDate(message.ts)}</span>
                </div>
                <div class="message-text">{message.text}</div>
            </li>
        {/each}
    </ul>
</main>

<style>
    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin-bottom: 1rem;
        border-bottom: 1px solid #ccc;
        padding-bottom: 1rem;
    }

    .message-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
    }

    .user {
        font-weight: bold;
    }

    .timestamp {
        color: #666;
    }

    .message-text {
        white-space: pre-wrap;
    }
</style>