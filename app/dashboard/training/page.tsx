interface Video {
  id: string
  title: string
  youtubeUrl: string
  duration: number
  quiz: Question[]
  unlocked: boolean
}

const handleVideoComplete = async (videoId: string, quizScore: number) => {
  if (quizScore >= 80) {
    await unlockNextVideo(videoId)
    showConfetti()
    updateLeaderboard()
    sendPushNotification("Video unlocked! 🎉")
  }
}

// Quiz at end of video
<QuizModal 
  questions={currentVideo.quiz}
  onComplete={(score) => handleVideoComplete(currentVideo.id, score)}
  passingScore={80}
/>
