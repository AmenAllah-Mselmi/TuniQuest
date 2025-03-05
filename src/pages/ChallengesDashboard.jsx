import React, { useState } from 'react';

const ChallengesTable = () => {
  const [challenges, setChallenges] = useState([
    { id: 1, name: 'Challenge 1', description: 'Solve problem X' },
    { id: 2, name: 'Challenge 2', description: 'Implement feature Y' },
  ]);
  const [newChallenge, setNewChallenge] = useState({ name: '', description: '' });
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewChallenge({ ...newChallenge, [name]: value });
  };

  const addChallenge = () => {
    if (newChallenge.name && newChallenge.description) {
      const challenge = { id: Date.now(), ...newChallenge };
      setChallenges([...challenges, challenge]);
      setNewChallenge({ name: '', description: '' });
    }
  };

  const deleteChallenge = (id) => {
    setChallenges(challenges.filter((challenge) => challenge.id !== id));
  };

  const startEditing = (challenge) => {
    setEditingId(challenge.id);
    setNewChallenge({ name: challenge.name, description: challenge.description });
  };

  const saveEdit = () => {
    const updatedChallenges = challenges.map((challenge) =>
      challenge.id === editingId ? { ...challenge, ...newChallenge } : challenge
    );
    setChallenges(updatedChallenges);
    setEditingId(null);
    setNewChallenge({ name: '', description: '' });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Challenges Management</h2>
      <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Description</th>
            <th className="py-3 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {challenges.map((challenge) => (
            <tr key={challenge.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-4">{challenge.name}</td>
              <td className="py-3 px-4">{challenge.description}</td>
              <td className="py-3 px-4">
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 mr-2"
                  onClick={() => deleteChallenge(challenge.id)}
                >
                  Delete
                </button>
                <button
                  className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600"
                  onClick={() => startEditing(challenge)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">
          {editingId !== null ? 'Edit Challenge' : 'Add New Challenge'}
        </h3>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Challenge Name"
            value={newChallenge.name}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="description"
            placeholder="Challenge Description"
            value={newChallenge.description}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {editingId !== null ? (
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
              onClick={saveEdit}
            >
              Save Edit
            </button>
          ) : (
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
              onClick={addChallenge}
            >
              Add Challenge
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChallengesTable;