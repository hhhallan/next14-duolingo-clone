import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

export const LessonList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="title" />
        <ReferenceField reference="units" source="unitId" />
        <NumberField source="order" />
      </Datagrid>
    </List>
  );
};
