import {Flex, Checkbox, Text, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, PopoverFooter, ButtonGroup, Button} from "@chakra-ui/react"
import {DeleteIcon} from "@chakra-ui/icons"
import { useState } from "react";
import { Task } from "../types/Task";

interface TaskProps{
    task: Task;
    index: number;
    taskList: Task[];
    setTaskList: Function;    
}

export default function TaskItem ({task, index, taskList, setTaskList}:TaskProps) {
    const [popover, setPopover]=useState(false);
    const closePopover= ()=> setPopover(false);
    const deleteTask= (index:number)=> {
        const list= [...taskList];
        list.splice (index, 1);
        setTaskList (list);
        closePopover ();
    }
    return (
        <Flex bg="purple.600" w="400px" minH="40px" paddingX="5" alignItems="center" borderRadius={15} marginY="5">
            <Checkbox isChecked={task.isDone}/>
            <Text marginRight="auto" marginLeft="5" paddingRight={2.5} wordBreak="break-all" textDecor={task.isDone ?"line-through":"none"} opacity={task.isDone ? "0.5":"1"}>
                {task.name}
            </Text>
            <Popover isOpen={popover} onClose={closePopover} closeOnBlur={false}>
                <PopoverTrigger>
                    <button onClick={()=>setPopover(true)}>
                        <DeleteIcon/>
                    </button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow/>
                    <PopoverCloseButton/>
                    <PopoverHeader>
                        Confirm
                    </PopoverHeader>
                    <PopoverBody>
                        Tem certeza que deseja deletar essa tarefa?
                    </PopoverBody>
                    <PopoverFooter d="flex" justifyContent="flex-end">
                        <ButtonGroup size="sm">
                            <Button variant="outline" onClick={closePopover}>
                                Cancelar
                            </Button>
                            <Button colorScheme="red" onClick={()=>deleteTask(index)}>
                                Deletar
                            </Button>
                        </ButtonGroup>
                    </PopoverFooter>
                </PopoverContent>
            </Popover>
        </Flex>
    );
}