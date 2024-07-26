<template>
    <div style="display: flex; align-items: center; justify-content: space-between;margin-right: 15px;">
        
    <!-- <svg viewBox="0 0 1024 1024" class="play-audio">
          <path d="M719.53 831.53c-12.286 0-24.566-4.686-33.942-14.056-18.744-18.744-18.744-49.136 0-67.882 131.006-131.006 131.006-344.17 0-475.176-18.744-18.746-18.744-49.138 0-67.882 18.744-18.742 49.138-18.744 67.882 0 81.594 81.59 126.53 190.074 126.53 305.466 0 115.39-44.936 223.876-126.53 305.47-9.372 9.374-21.656 14.060-33.94 14.060v0zM549.020 741.020c-12.286 0-24.566-4.686-33.942-14.058-18.746-18.746-18.746-49.134 0-67.88 81.1-81.1 81.1-213.058 0-294.156-18.746-18.746-18.746-49.138 0-67.882s49.136-18.744 67.882 0c118.53 118.53 118.53 311.392 0 429.922-9.372 9.368-21.656 14.054-33.94 14.054z"></path>
          <path d="M416.006 960c-8.328 0-16.512-3.25-22.634-9.374l-246.626-246.626h-114.746c-17.672 0-32-14.326-32-32v-320c0-17.672 14.328-32 32-32h114.746l246.626-246.628c9.154-9.154 22.916-11.89 34.874-6.936 11.958 4.952 19.754 16.622 19.754 29.564v832c0 12.944-7.796 24.612-19.754 29.564-3.958 1.64-8.118 2.436-12.24 2.436z"></path>
    </svg> -->
    <div class="volume-control">
        <input type="range" min="0" max="100" v-model="volume" @change="updateVolume">
    </div>
    </div>
</template>

<script>
export default {
    name: 'VolumeControl',
    data() {
        return {
            volume: 50, // 初始音量为50%
        }
    },
    methods: {
        updateVolume() {
            this.$emit('volume-change', this.volume)
        }
    },
}
</script>

<style scoped>
.volume-control {
    width: 100%;
    margin-left: 20px;
}
.play-audio { 
    fill: var(--dl-color-pink-100);
   
    position: relative; 
    top: 0%; 
    
    transform: translateX(-25px); 
    width: 20px; 
    height: 20px; 
    
} 
input {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 8px;
    background-color: #eeeeee;
    outline: none;
    border-radius: 4px;
}

input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background-color: var(--dl-color-pink-100);
    cursor: pointer;
    border-radius: 50%;
}
</style>