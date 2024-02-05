import { createLazyFileRoute } from '@tanstack/react-router';
import IndexScreen from '../screens/Index/Index';

export const Route = createLazyFileRoute('/')({
  component: IndexScreen,
})
