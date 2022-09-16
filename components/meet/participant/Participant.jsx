import { useState } from 'react';
import ParticipantItem from './ParticipantItem';

export default function Participant() {
  const [participants, setParticipants] = useState([
    {
      id: 1,
      name: 'Josué ayala',
      hasActiveMicrophone: false,
      hasActiveVideo: false,
      photo:
        'https://images.unsplash.com/photo-1663326224028-27ba787bb7ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    },
    {
      id: 2,
      name: 'Michelle Salinas',
      hasActiveMicrophone: true,
      hasActiveVideo: false,
      photo:
        'https://images.unsplash.com/photo-1663267602456-738c047aefbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
    {
      id: 3,
      name: 'Oscar Vasquez',
      hasActiveMicrophone: true,
      hasActiveVideo: true,
      photo:
        'https://images.unsplash.com/photo-1663183538216-571795cd64ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    },
  ]);

  return (
    <div className="w-full flex-1 overflow-hidden flex-col flex gap-3">
      <h4>Participants</h4>
      <div className="flex-1 overflow-auto flex flex-col gap-3">
        {participants.map((participant) => (
          <ParticipantItem {...participant} key={participant.id} />
        ))}
      </div>
    </div>
  );
}
