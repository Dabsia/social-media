import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({isModalOpened, setIsModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
          overlayBlur={3}
          size = '55%'
          opened={isModalOpened}
          onClose = {() => setIsModalOpened(false)}
    >
          <form className='infoForm'>
              <h3>Your Info</h3>
              <div>
                  <input type='text' className='infoInput' name='fname' placeholder='FirstName' />
                  <input type = 'text' className = 'infoInput' name = 'lname' placeholder = 'FirstName' />
              </div>
              <div>
                  <input type = 'text' className = 'infoInput' name = 'worksAt' placeholder = 'Works at' />
              </div>
               <div>
                  <input type='text' className='infoInput' name='livesIn' placeholder='Lives In' />
                  <input type = 'text' className = 'infoInput' name = 'country' placeholder = 'Country' />
              </div>
              <div>
                  <input type = 'text' className = 'infoInput' name = 'worksAt' placeholder = 'Relationship Status' />
              </div>
              <div>
                  Profile Image
                  <input type='file' name='profileImg' />
                  Cover Image
                  <input type = 'file' name = 'coverImg' />
              </div>
              <button className = 'button infoBtn updateBtn'>Update</button>
          </form>
    </Modal>
  );
}

export default ProfileModal