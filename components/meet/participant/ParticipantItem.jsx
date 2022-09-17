import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

export default function ParticipantItem({
  name,
  photo,
  hasActiveMicrophone,
  hasActiveVideo,
}) {
  return (
    <div className="flex justify-between items-center rounded-lg">
      <div className="flex gap-3 items-center">
        <figure className="w-[3rem] aspect-square rounded-lg overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={photo}
            alt="Participant photo"
          />
        </figure>
        {name}
      </div>

      {/* Participant actions */}
      <div className="flex gap-2">
        <Button color="outlined" icon={true}>
          <Icon name={hasActiveMicrophone ? 'microphone' : 'microphone-off'} />
        </Button>
        <Button color="outlined" icon={true}>
          <Icon name={hasActiveVideo ? 'video-camera' : 'video-off'} />
        </Button>
      </div>
    </div>
  );
}
