<template>
    <section class="relative bg-white">
  <div class="px-4 py-8 md:py-20 md:px-20">
    <!-- Header Text -->
    <div class="flex flex-col py-2 mx-2 my-3 text-center md:mx-5 md:my-5">
      <h3 class="text-2xl font-bold text-gray-900 md:text-4xl anim-slide-up">
        Start with our design and give 
        <br class="hidden md:block" />
        your app a fresh look.
      </h3>
      <p class="mt-4 text-sm text-gray-500 md:mt-7 md:text-base anim-slide-up">
        Updating branding in your app is now easier than ever with our design system. 
        <br class="hidden md:block" />
        The Shape allows you to make changes to your colors, icons within your app.
      </p>
    </div>

    <!-- Video Section -->
    <div class="relative flex justify-center py-5 mx-2 my-5 md:py-10 md:mx-10 md:my-10">
      <!-- Decorative Images - Hidden on mobile -->
      <img 
        class="absolute hidden md:block" 
        src="https://prium.github.io/Shape/assets/img/illustrations/home/home-vector-1.png" 
        alt="" 
        style="left:10%; width:16%; top:1%;"
      >
      <img 
        class="absolute hidden md:block" 
        src="https://prium.github.io/Shape/assets/img/illustrations/home/jhiri-1.png" 
        alt="" 
        style="left:10%; width:11%; top:-5%;"
      >
      <img 
        class="absolute hidden md:block" 
        src="https://prium.github.io/Shape/assets/img/illustrations/home/home-vector-2.png" 
        alt="" 
        style="right: 10%; width:20%; top:1%;"
      >
      
      <div class="video-wrapper anim-slide-up">
    <img
      src="https://prium.github.io/Shape/assets/img/bg-img/home-video-bg.png"
      alt="Video thumbnail"
      class="video-cover w-[650px]"
      :class="{ hide: isPlaying }"
      ref="videoCover"
    />
    <video class="w-[650px]"
      ref="video"
      src="https://prium.github.io/Shape/assets/video/beach.mp4"
      preload="metadata"
      @click="togglePlay"
      @timeupdate="updateProgress"
      @ended="handleVideoEnd"
    >
    </video>
    
    <button
      class="center-play-button"
      :class="{ hide: isPlaying }"
      @click="startPlay"
    >
      <svg viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>

    <div class="controls-wrapper">
      <button class="play-button" @click="togglePlay">
        {{ isPlaying ? '⏸' : '▶' }}
      </button>
      
      <div
        class="progress-bar"
        ref="progressBar"
        @click="seek"
      >
        <div
          class="progress"
          :style="{ width: `${progress}%` }"
        />
      </div>

      <span class="time">{{ formattedTime }}</span>
      
      <button
        class="settings-button"
        @click.stop="toggleSettings"
      >
        ⚙️
      </button>
      
      <button
        class="fullscreen-button"
        @click="toggleFullscreen"
      >
        ⛶
      </button>

      <div
        v-show="showSettings"
        class="settings-menu"
        ref="settingsMenu"
      >
        <button @click="changePlaybackSpeed">
          Speed: {{ currentSpeed }}x
        </button>
        <button @click="toggleCaptions">
          Captions: {{ captionsEnabled ? 'On' : 'Off' }}
        </button>
      </div>
    </div>
  </div>
    </div>

    
    <div class="flex flex-col justify-around gap-6 px-2 pt-5 mx-10 md:flex-row md:px-5">
      
      <div class="flex items-start gap-3 p-1 md:items-center">
        <img
          class="w-10 md:w-[70px]"
          src="https://prium.github.io/Shape/assets/img/icons/icon-1.png"
          alt="download "
        />
        <div class="flex-1">
          <p class="text-xl font-semibold text-gray-700 md:text-2xl">
            Create your account in Shape
          </p>
          <p class="mt-2 text-sm text-gray-500 md:text-base">
            its easy, simple and just a few clicks job to create an account with shape
          </p>
        </div>
      </div>

      
      <div class="flex items-start gap-3 p-1 md:items-center">
        <img
          class="w-10 md:w-[70px]"
          src="https://prium.github.io/Shape/assets/img/icons/icon.png"
          alt="download"
        />
        <div class="flex-1">
          <p class="text-xl font-semibold text-gray-700 md:text-2xl">
            Start building beautiful Apps With shape
          </p>
          <p class="mt-2 text-sm text-gray-500 md:text-base">
            with our design system, you will find it no brainers job to build your application
          </p>
        </div>
      </div>

    
      <div class="flex items-start gap-3 p-1 md:items-center">
        <img
          class="w-10 md:w-[70px]"
          src="https://prium.github.io/Shape/assets/img/icons/icon-3.png"
          alt="download"
        />
        <div class="flex-1">
          <p class="text-xl font-semibold text-gray-700 md:text-2xl">
            Deploy your site and make money
          </p>
          <p class="mt-2 text-sm text-gray-500 md:text-base">
            make it, bake it, and next thing you know your cake is ready. enjoy it!
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted, onMounted } from 'vue'

const video = ref<HTMLVideoElement | null>(null)
const progressBar = ref<HTMLDivElement | null>(null)
const settingsMenu = ref<HTMLElement | null>(null)
const isPlaying = ref(false)
const progress = ref(0)
const currentTime = ref(0)
const showSettings = ref(false)
const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2]
const currentSpeedIndex = ref(2)
const captionsEnabled = ref(false)

// Computed properties
const currentSpeed = computed(() => speeds[currentSpeedIndex.value])
const formattedTime = computed(() => formatTime(currentTime.value))

// Methods
const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

const startPlay = () => {
  if (video.value) {
    video.value.play()
    isPlaying.value = true
  }
}

const togglePlay = () => {
  if (!video.value) return

  if (video.value.paused) {
    video.value.play()
    isPlaying.value = true
  } else {
    video.value.pause()
    isPlaying.value = false
  }
}

const updateProgress = () => {
  if (!video.value) return

  currentTime.value = video.value.currentTime
  progress.value = (video.value.currentTime / video.value.duration) * 100
}

const seek = (e: MouseEvent) => {
  if (!video.value || !progressBar.value) return

  const rect = progressBar.value.getBoundingClientRect()
  const percent = (e.clientX - rect.left) / rect.width
  video.value.currentTime = percent * video.value.duration
}

const toggleFullscreen = async () => {
  if (!video.value) return

  if (!document.fullscreenElement) {
    await video.value.requestFullscreen()
  } else {
    await document.exitFullscreen()
  }
}

const toggleSettings = () => {
  showSettings.value = !showSettings.value
}

const changePlaybackSpeed = () => {
  if (!video.value) return

  currentSpeedIndex.value = (currentSpeedIndex.value + 1) % speeds.length
  video.value.playbackRate = speeds[currentSpeedIndex.value]
}

const toggleCaptions = () => {
  if (!video.value || !video.value.textTracks[0]) return

  const track = video.value.textTracks[0]
  if (track.mode === 'showing') {
    track.mode = 'hidden'
    captionsEnabled.value = false
  } else {
    track.mode = 'showing'
    captionsEnabled.value = true
  }
}

const handleVideoEnd = () => {
  isPlaying.value = false
}

// Handle click outside for settings menu
const handleClickOutside = (event: MouseEvent) => {
  if (
    settingsMenu.value && 
    !settingsMenu.value.contains(event.target as Node) &&
    !(event.target as HTMLElement).closest('.settings-button')
  ) {
    showSettings.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>


<style scoped>
@keyframes slideUp {
  0% {
    transform: translateY(45%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

.anim-slide-up {
  animation: slideUp 3s ease-in  backwards;

}
</style>