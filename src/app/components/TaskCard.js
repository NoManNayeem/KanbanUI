'use client';

import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FaGripLines } from 'react-icons/fa';

const CardItem = ({ data, index }) => {
  return (
    <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white rounded-md p-4 shadow-md mb-3"
        >
          <div className="flex justify-between items-center">
            <FaGripLines className="text-gray-500 cursor-grab" />
            <div
              className={`priority-label ${
                data.priority === 0
                  ? 'bg-blue-400'
                  : data.priority === 1
                  ? 'bg-yellow-400'
                  : 'bg-red-400'
              } text-white px-2 py-1 rounded-md`}
            >
              {data.priority === 0 ? 'Low' : data.priority === 1 ? 'Medium' : 'High'}
            </div>
          </div>
          <h5 className="mt-2 text-lg font-bold">{data.title}</h5>
          <p className="mt-1 text-gray-600">{data.description}</p>
          <div className="mt-2 flex space-x-2 items-center">
            <span className="text-gray-500">Chat: {data.chat}</span>
            <span className="text-gray-500">Attachments: {data.attachment}</span>
          </div>
          <ul className="flex mt-2 space-x-2">
            {data.assignees.map((assignee, idx) => (
              <li key={idx}>
                <img
                  src={assignee.avt}
                  alt="assignee"
                  className="rounded-full w-8 h-8 object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </Draggable>
  );
};

export default CardItem;
