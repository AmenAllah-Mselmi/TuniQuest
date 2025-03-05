import React, { useState } from 'react';
import { motion } from 'framer-motion';
import QuizCard from '../components/QuizCard';
import { AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline';

const quizzes = [
  {
    id: 1,
    title: "Ancient Carthage",
    description: "Test your knowledge about the Phoenician civilization of Carthage",
    difficulty: "Beginner",
    questions: [
      {
        question: "Who founded the ancient city of Carthage?",
        answers: ["Queen Dido", "Hannibal", "Julius Caesar", "Alexander the Great"],
        correctAnswer: 0
      },
      {
        question: "What was Carthage's main source of wealth?",
        answers: ["Agriculture", "Trade", "Mining", "Fishing"],
        correctAnswer: 1
      },
      {
        question: "Which empire eventually destroyed Carthage?",
        answers: ["Greek", "Persian", "Roman", "Ottoman"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 2,
    title: "Islamic Architecture",
    description: "Learn about Tunisia's magnificent Islamic architectural heritage",
    difficulty: "Intermediate",
    questions: [
      {
        question: "Which city is known as the fourth holiest city in Islam?",
        answers: ["Tunis", "Sfax", "Kairouan", "Sousse"],
        correctAnswer: 2
      },
      {
        question: "What is the oldest mosque in North Africa?",
        answers: ["Great Mosque of Kairouan", "Ez-Zitouna Mosque", "Uqba Mosque", "Al-Zaytuna Mosque"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 3,
    title: "Modern Tunisia",
    description: "Explore the history of modern Tunisia",
    difficulty: "Advanced",
    questions: [
      {
        question: "When did Tunisia gain independence?",
        answers: ["1956", "1960", "1945", "1962"],
        correctAnswer: 0
      },
      {
        question: "What is Tunisia's official language?",
        answers: ["French", "Arabic", "Berber", "English"],
        correctAnswer: 1
      },
      {
        question: "Which event marked the beginning of the Arab Spring?",
        answers: ["Tunisian Revolution", "Egyptian Revolution", "Syrian Civil War", "Libyan Civil War"],
        correctAnswer: 0
      }
    ]
  }
];

function Learn() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [completedQuizzes, setCompletedQuizzes] = useState([]);
  const [earnedPoints, setEarnedPoints] = useState(0);

  const handleQuizComplete = (score) => {
    if (score >= 70) {
      setEarnedPoints(prev => prev + 100);
      setCompletedQuizzes(prev => [...prev, selectedQuiz.id]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Interactive Learning</h1>
        <p className="text-xl text-gray-600">
          Test your knowledge about Tunisia's rich history and earn rewards!
        </p>
      </div>

      {/* Progress Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <TrophyIcon className="h-8 w-8 text-yellow-500" />
            <div>
              <h2 className="text-2xl font-semibold">Your Progress</h2>
              <p className="text-gray-600">Keep learning to earn more points!</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-blue-600">{earnedPoints}</p>
            <p className="text-gray-600">Points Earned</p>
          </div>
        </div>
      </div>

      {selectedQuiz ? (
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setSelectedQuiz(null)}
            className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
          >
            ← Back to Quizzes
          </button>
          <QuizCard quiz={selectedQuiz} onComplete={handleQuizComplete} />
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quizzes.map((quiz) => (
            <motion.div
              key={quiz.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-sm p-6 cursor-pointer"
              onClick={() => setSelectedQuiz(quiz)}
            >
              <div className="flex items-center justify-between mb-4">
                <AcademicCapIcon className="h-8 w-8 text-blue-500" />
                {completedQuizzes.includes(quiz.id) && (
                  <TrophyIcon className="h-6 w-6 text-yellow-500" />
                )}
              </div>
              <h2 className="text-xl font-semibold mb-2">{quiz.title}</h2>
              <p className="text-gray-600 mb-4">{quiz.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{quiz.difficulty}</span>
                <span className="text-sm text-blue-600">
                  {quiz.questions.length} questions
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Learn;