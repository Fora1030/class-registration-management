import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Sidebar from './Sidebar';
import SidebarFaculty from './SideBarFaculty';

export default function Body({ sidebar, sidebarFaculty, children }) {
  return (
    <Container>
      <Stack direction="horizontal" className="Body">
        {sidebar && <Sidebar />}
        {sidebarFaculty && <SidebarFaculty/>}
        <Container className="Content">
          {children}
        </Container>
      </Stack>
    </Container>
  );
}