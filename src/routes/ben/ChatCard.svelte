<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  let message = '';
  let messages = writable([
    {
      avatar: '', // Remove the image path
      fallback: 'JP',
      name: 'Jared Palmer',
      time: '2:39pm',
      text: "Hey everyone, how's it going?"
    },
    {
      avatar: '', // Remove the image path
      fallback: 'CN',
      name: 'Colm Tuite',
      time: '2:40pm',
      text: 'Doing great, thanks for asking!'
    },
    {
      avatar: '', // Remove the image path
      fallback: 'ML',
      name: 'Max Leiter',
      time: '2:41pm',
      text: 'Awesome, glad to hear it!'
    }
  ]);
</script>

<div class="card w-fit min-w-[360px] rounded-md bg-[#1A1D21] text-white">
  <div class="card-header flex items-center justify-between p-2 border-b border-[#2F3336]">
    <div class="flex items-center gap-3">
      <h3 class="text-sm font-sm">#dev / thread</h3>
    </div>
  </div>
  <div class="scroll-area h-[400px] sm:h-[400px] md:h-[400px] lg:h-[400px] xl:h-[400px]">
    <div class="card-content p-4 space-y-4">
      {#each $messages as msg, i}
        <div class="flex items-start gap-4 {i > 0 ? 'ml-7' : 'ml-1'}">
          <div class="avatar w-8 h-8 border border-[#2F3336]">
            <!-- Use SVG placeholder instead of image -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="avatar-image"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
              <line x1="9.69" y1="8" x2="21.17" y2="8" />
              <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
              <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
              <line x1="14.31" y1="16" x2="2.83" y2="16" />
              <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
            </svg>
          </div>
          <div class="grid gap-1 text-sm">
            <div class="flex items-center gap-2">
              <div class="font-medium">{msg.name}</div>
              <div class="text-[#8899A6]">{msg.time}</div>
            </div>
            <div>
              <p>{msg.text}</p>
            </div>
          </div>
        </div>
        {#if i === 0}
          <div class="text-sm text-[#8899A6]">2 replies &nbsp;&nbsp; ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</div>
        {/if}
      {/each}
    </div>
  </div>
  <div class="card-footer p-3 border-t border-[#2F3336]">
    <div class="relative w-full">
      <textarea
        placeholder="Type your message..."
        name="message"
        id="message"
        rows="1"
        bind:value={message}
        class="min-h-[48px] rounded-2xl resize-none p-4 border border-[#2F3336] bg-[#2F3336] shadow-sm pr-16 text-white sm:min-h-[48px] md:min-h-[48px] lg:min-h-[48px] xl:min-h-[48px]"
      ></textarea>
      <button
        type="submit"
        class="absolute w-8 h-8 top-3 right-3 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-8 xl:h-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4 h-4"
        >
          <path d="m5 12 7-7 7 7" />
          <path d="M12 19V5" />
        </svg>
        <span class="sr-only">Send</span>
      </button>
    </div>
  </div>
</div>

<style>
  .card {
    /* Add your styles here */
  }
  .card-header {
    /* Add your styles here */
  }
  .scroll-area {
    /* Add your styles here */
  }
  .card-content {
    /* Add your styles here */
  }
  .avatar {
    /* Add your styles here */
  }
  .avatar-image {
    /* Add your styles here */
  }
  .avatar-fallback {
    /* Add your styles here */
  }
  .card-footer {
    /* Add your styles here */
  }
</style>