import { useEffect, useState } from "react";
import { Teacher } from "../../@types/teacher";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
    const [teachersList, setTeachersList] = useState<Teacher[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher|null>(null);
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        ApiService.get('/teachers').then((aws) => {
            setTeachersList(aws.data)
        })
    }, []);

    useEffect(() => {
        clearForm();
    }, [selectedTeacher]);

    function scheduleClass(){
        if (selectedTeacher !== null) {
            if (validateDataClass()) {
                ApiService.post('/teachers/' + selectedTeacher.id + '/classes/', {
                      name,
                      email              
                }).then(() => {
                    setSelectedTeacher(null);
                    setAlertMessage("Successfuly Schedulled");
                }).catch((error) => {
                    setAlertMessage(error.response?.data.message);
                })
            } else {
                setAlertMessage('You need to correctly fill the blanks');
            }
        }
    }

    function validateDataClass(){
        return name.length > 0 && email.length > 0;
    }

    function clearForm(){
        setName('');
        setEmail('');
    }

    return {
        teachersList,
        name,
        setName,
        email,
        setEmail,
        selectedTeacher,
        setSelectedTeacher,
        scheduleClass,
        alertMessage,
        setAlertMessage
    }
}