import { Button } from "@mui/material";
import { Teacher } from "../../@types/teacher";
import { Description, EmptyList, Informations, ItemList, ListStyled, Name, Photo, Value } from "./List.style";

interface ListProps {
    teachers: Teacher[],
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
                                <Value>{teacher.value_hour.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })} by hour</Value>
                                <Description>{teacher.description}</Description>
                                <Button sx={{ width: '70%' }}>Schedule class with {teacher.name}</Button>
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