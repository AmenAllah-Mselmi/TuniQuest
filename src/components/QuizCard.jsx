import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

function QuizCard({ quiz, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === quiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 10);
    }

    if (currentQuestion + 1 < quiz.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
      if (score + (selectedAnswer === quiz.questions[currentQuestion].correctAnswer ? 10 : 0) >= 70) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      }
      onComplete(score + (selectedAnswer === quiz.questions[currentQuestion].correctAnswer ? 10 : 0));
    }
  };

  if (showResult) {
    const finalScore = score + (selectedAnswer === quiz.questions[currentQuestion].correctAnswer ? 10 : 0);
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-8 text-center"
      >
        {showConfetti && <Confetti />}
        <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
        <p className="text-xl mb-4">Your Score: {finalScore}%</p>
        {finalScore >= 70 ? (
          <div className="text-green-600 flex items-center justify-center gap-2">
            <CheckCircleIcon className="h-6 w-6" />
            <span>Congratulations! You've earned a badge!</span>
          </div>
        ) : (
          <div className="text-red-600 flex items-center justify-center gap-2">
            <XCircleIcon className="h-6 w-6" />
            <span>Try again to earn a badge!</span>
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-8"
    >
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">Question {currentQuestion + 1} of {quiz.questions.length}</span>
          <span className="text-sm text-gray-500">Score: {score}</span>
        </div>
        <h3 className="text-xl font-semibold mb-4">{quiz.questions[currentQuestion].question}</h3>
        <div className="space-y-3">
          {quiz.questions[currentQuestion].answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full text-left p-4 rounded-lg transition-colors ${
                selectedAnswer === index
                  ? 'bg-blue-100 border-blue-500'
                  : 'bg-gray-50 hover:bg-gray-100'
              } border`}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={handleNext}
        disabled={selectedAnswer === null}
        className={`w-full py-3 rounded-lg font-semibold transition-colors ${
          selectedAnswer === null
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {currentQuestion + 1 === quiz.questions.length ? 'Finish Quiz' : 'Next Question'}
      </button>
    </motion.div>
  );
}

export default QuizCard;