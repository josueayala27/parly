import useAxios from '@/hooks/useAxios';
import { setParticipants } from '@/store/slices/participantSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ParticipantItem from './ParticipantItem';

export default function Participant() {
  const { data, loading } = useAxios({ method: 'get', url: '/users' });
  const { participants } = useSelector((state) => state.participant);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) dispatch(setParticipants(data));
  }, [data]);

  return (
    <div className="w-full flex-1 overflow-hidden flex-col flex gap-3">
      <h4>Participants</h4>
      {loading && !participants ? (
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
