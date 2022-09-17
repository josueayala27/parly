import useAxios from '@/hooks/useAxios';
import { useEffect, useState } from 'react';
import ParticipantItem from './ParticipantItem';

export default function Participant() {
  const [participants, setParticipants] = useState([]);

  const { data, loading, error } = useAxios({ method: 'get', url: '/users' });
  if (error) {
    setApiError(error);
    return;
  }

  useEffect(() => {
    if (data) setParticipants(data);
  }, [data]);

  return (
    <div className="w-full flex-1 overflow-hidden flex-col flex gap-3">
      <h4>Participants</h4>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex-1 overflow-auto flex flex-col gap-3">
          {participants.map((participant) => (
            <ParticipantItem {...participant} key={participant.id} />
          ))}
        </div>
      )}
    </div>
  );
}
