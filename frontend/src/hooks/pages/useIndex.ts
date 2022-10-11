import { useEffect, useState } from "react";
import { Teacher } from "../../@types/teacher";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
    const [teachersList, setTeachersList] = useState<Teacher[]>([])

    useEffect(() => {
        ApiService.get('/teachers').then((aws) => {
            setTeachersList(aws.data)
        })
    }, []);

    return {
        teachersList 
    }
}