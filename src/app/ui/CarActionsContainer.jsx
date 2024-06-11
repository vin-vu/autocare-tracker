import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function CarActionsContainer() {
  return (
    <Stack direction='row' justifyContent='center' spacing={2}>
      <Button variant="contained">Add Car</Button>
      <Button variant="contained">Delete</Button>
    </Stack>
  );
}
