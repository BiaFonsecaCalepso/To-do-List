import {Flex, Input, Button} from "@chakra-ui/react"
import { useRef } from "react"
import usePersistedState from "../hooks/usePersistedState";
import { Task } from "../types/Task";

export default function TaskList (){
    const inputRef = useRef<HTMLInputElement>(null);

    const [taskList, setTaskList] = usePersistedState<Task[]> ("tasks", []); 
    
    const addTask = ()=>{
        const inputValue = inputRef.current!.value;
        const list = [...taskList];
        const newTask = (name: string):Task => {
            return {name, isDone:false};
        }

        list.push (
            newTask (inputValue)
        );

        inputRef.current!.value = "";
        setTaskList (list);
    } 
    
    return (
        <>
            <Flex marginX={20} marginTop={5} h="5vh">
                <Input ref={inputRef}/>
                <Button type="submit" onClick={addTask} colorScheme="purple">
                    Add Task
                </Button>
            </Flex>
            <Flex flexDir="column" alignItems="center" as="main" minH="51.9vh" paddingY={5}>
                {taskList.map (
                    (task: Task, index:number)=> (
                        <h4>{task.name}</h4>
                    )
                )}
            </Flex>
        </>
    )
}
