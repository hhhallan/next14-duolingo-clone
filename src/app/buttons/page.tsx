import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
  return (
    <div className=" flex flex-col py-4 px-10 gap-2">
      <Button>DEFAULT</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutline">Primary Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondaryOutline">Secondary Outline</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="dangerOutline">Danger Outline</Button>
      <Button variant="super">Super</Button>
      <Button variant="superOutline">Super Outline</Button>
      <Button variant="sidebar">sidebar</Button>
      <Button variant="sidebarOutline">sidebar Outline</Button>
      <Button variant="ghost">ghost</Button>
    </div>
  );
};

export default ButtonsPage;
