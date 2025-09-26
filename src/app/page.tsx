import AddItemForm from "@/components/form/AddItemForm";
import TodoComplete from "@/components/todo/TodoComplete";
import TodoList from "@/components/todo/TodoList";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <AddItemForm />
      <Separator className="my-4" />
      <TodoList />
      <TodoComplete />
    </>
  );
}
