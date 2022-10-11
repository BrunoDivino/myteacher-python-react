import { Button } from "@mui/material";
import { Teacher } from "../../@types/teacher";
import { FormatService } from "../../services/FormatService";
import { Description, EmptyList, Informations, ItemList, ListStyled, Name, Photo, Value } from "./List.style";

interface ListProps {
    teachers: Teacher[],
    onSelect: (teacher: Teacher) => void
}

const List = (props: ListProps) => {
    return (
        <div>
            {props.teachers.length > 0 ? (
                <ListStyled>
                    {props.teachers.map(teacher => (
                        <ItemList key={teacher.id}>
                            <Photo src={teacher.photo}></Photo>
                            <Informations>
                                <Name>{teacher.name}</Name>
                                <Value>{FormatService.monetaryValue(teacher.value_hour)} by hour</Value>
                                <Description>{FormatService.textLimit(teacher.description, 200)}</Description>
                                <Button onClick={() => props.onSelect(teacher)} sx={{ width: '70%' }}>Schedule class with {teacher.name}</Button>
                            </Informations>
                        </ItemList>
                    ))}  
                </ListStyled>
            ) : (
                <EmptyList>No item found</EmptyList>
            )}
        </div>
    )
}

export default List;