'use client';
import { XCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from 'react-beautiful-dnd';

type Props = {
  todo: Todo;
  index: number;
  id: TypedColumn;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};

const TodoCard = ({
  todo,
  index,
  id,
  innerRef,
  draggableProps,
  dragHandleProps,
}: Props) => {
  return (
    <div
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
      className='bg-white p-2 rounded-md space-y-2 drop-shadow-md'
    >
      <div className='flex justify-between items-center p-5'>
        <p>{todo.title}</p>
        <button className='text-red-500 hover:text-red-600 transition-all'>
          <XCircleIcon className='ml-5 h-8 w-8' />
        </button>
      </div>

      {/* {imageUrl && ()} */}
    </div>
  );
};

export default TodoCard;
