import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

export default function Home() {
  return (
    <div className="h-screen flex p-3 gap-3">
      <div className="flex-1 flex flex-col gap-3">
        <div className="bg-gray-200 rounded-lg h-full p-3 flex flex-col gap-3">
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

          <section className=" flex-1 bg-gray-100 grid place-items-center">
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
      <aside className="w-[360px] grid grid-cols-1 gap-3">
        <div className="w-full h-full bg-red-400 rounded-lg p-3">
          <h4>Participants</h4>
        </div>
        <div className="w-full h-full bg-blue-400 rounded-lg p-3">
          <h4>Chat</h4>
        </div>
      </aside>
    </div>
  );
}
