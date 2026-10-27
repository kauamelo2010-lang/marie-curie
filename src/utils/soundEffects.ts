/**
 * Web Audio API synthesizer for scientific ambient clicks and sound effects.
 * Safe, purely synthetic, zero external asset dependencies.
 */

class SoundController {
  private audioCtx: AudioContext | null = null;
  private isMuted: boolean = true;
  private geigerInterval: number | null = null;

  private initCtx() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (!this.isMuted) {
      this.initCtx();
      this.playChime();
    }
    return !this.isMuted;
  }

  public getIsAudioActive(): boolean {
    return !this.isMuted;
  }

  public playGeigerClick(volumeMultiplier = 1) {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.audioCtx) return;

    try {
      const bufferSize = this.audioCtx.sampleRate * 0.003; // 3ms click
      const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
      }

      const whiteNoise = this.audioCtx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.audioCtx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = 1200;

      const gain = this.audioCtx.createGain();
      gain.gain.value = 0.06 * volumeMultiplier;

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioCtx.destination);

      whiteNoise.start();
    } catch {
      // Audio autoplay policy fallback
    }
  }

  public playChime(freq = 660) {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.audioCtx) return;

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.audioCtx.currentTime + 0.3);

      gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.5);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.5);
    } catch {
      // Audio autoplay policy fallback
    }
  }

  public startContinuousGeiger(rateCps = 8) {
    if (this.geigerInterval) {
      clearInterval(this.geigerInterval);
      this.geigerInterval = null;
    }

    const intervalTime = Math.max(40, 1000 / rateCps);
    this.geigerInterval = window.setInterval(() => {
      // Add random jitter to simulate true radioactive Poisson decay
      if (Math.random() > 0.35) {
        this.playGeigerClick(0.7);
      }
    }, intervalTime);
  }

  public stopContinuousGeiger() {
    if (this.geigerInterval) {
      clearInterval(this.geigerInterval);
      this.geigerInterval = null;
    }
  }
}

export const soundManager = new SoundController();
