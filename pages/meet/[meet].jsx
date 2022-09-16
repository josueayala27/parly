import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Participant from '@/components/meet/participant/Participant';
import Chat from '@/components/meet/chat/Chat';
import Separator from '@/components/ui/Separator';
import Tab from '@/components/ui/tab/Tab';
import { useState } from 'react';

export default function Home() {
  const [activeMicrophone, setActiveMicrophone] = useState(false);
  const [activeVideo, setActiveVideo] = useState(false);

  const tabs = [
    { label: 'Participants', key: 1, children: <Participant /> },
    { label: 'Chat', key: 2, children: <Chat /> },
  ];

  return (
    <div className="h-screen flex p-3 gap-3">
      <div className="flex-1 flex flex-col gap-3">
        <div className="bg-gray-100 rounded-lg h-full p-3 flex flex-col gap-3">
          <div>
            <h3>UI meeting weekly | week 15</h3>
          </div>

          {/* Layout controls */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center bg-white px-4 py-2 rounded-full">
              <Icon name="user-group" />
              <p>32</p>
            </div>

            <div className="flex bg-white rounded-full">
              <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100">
                <Icon name="grid" />
              </div>
              <div className="p-2 bg-blue-500 text-white rounded-full cursor-pointer">
                <Icon name="square" />
              </div>
            </div>
          </div>

          <section className=" flex-1 bg-gray-200 rounded-lg grid place-items-center">
            Video content
          </section>

          <Separator />

          {/* footer controls */}
          <section className="flex justify-between">
            <div className="flex gap-2 items-center">
              nqv-zgxw-swn
              <Button icon color="outlined">
                <Icon name="copy" />
              </Button>
            </div>
            <div className="flex gap-1">
              <Button
                data-tip="hello"
                click={() => setActiveMicrophone(!activeMicrophone)}
                icon
                color={activeMicrophone ? 'outlined' : 'danger'}>
                <Icon
                  name={activeMicrophone ? 'microphone' : 'microphone-off'}
                />
              </Button>
              <Button
                click={() => setActiveVideo(!activeVideo)}
                icon
                color={activeVideo ? 'outlined' : 'danger'}>
                <Icon name={activeVideo ? 'video-camera' : 'video-off'} />
              </Button>
            </div>
            <Button color="danger">Leave meet</Button>
          </section>
        </div>
      </div>

      <aside className="w-[360px] rounded-lg">
        <Tab current={0} items={tabs} />
      </aside>
    </div>
  );
}
