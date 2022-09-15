import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { useState } from 'react';

export default function Home() {
  const [participants, setParticipants] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);

  return (
    <div className="h-screen flex p-3 gap-3">
      <div className="flex-1 flex flex-col gap-3">
        <div className="bg-gray-100 rounded-lg h-full p-3 flex flex-col gap-3">
          <div>
            <h3>UI meeting weekly | week 15</h3>
            <p>20 May 2022</p>
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

          {/* footer controls */}
          <section className="flex justify-between">
            <Button>nqv-zgxw-swn</Button>
            <div className="flex gap-1">
              <Button>
                <Icon name="microphone" />
              </Button>
              <Button>
                <Icon name="video-camera" />
              </Button>
              <Button>
                <Icon name="user-group" />
              </Button>
              <Button>
                <Icon name="message" />
              </Button>
            </div>
            <Button color="danger">Leave meet</Button>
          </section>
        </div>
      </div>
      <aside className="w-[360px] flex flex-col gap-3">
        <div className="w-full border rounded-lg p-3 h-[50%] overflow-auto">
          <h4>Participants</h4>
          <div className="">
            {participants.map(() => (
              <article className="flex justify-between items-center">
                <div className="flex gap-3 items-center mt-4">
                  <figure className="w-[3rem] aspect-square rounded-lg overflow-hidden">
                    <img
                      className="object-cover w-full h-full"
                      src="https://images.unsplash.com/photo-1663255420366-d5326beca2df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                      alt="Participant photo"
                    />
                  </figure>
                  Josué Ayala
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="w-full bg-blue-400 rounded-lg p-3 h-[50%]">
          <h4>Chat</h4>
        </div>
      </aside>
    </div>
  );
}
