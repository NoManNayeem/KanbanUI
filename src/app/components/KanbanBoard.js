'use client';

import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import CardItem from './TaskCard';
import BoardData from '../dummydata.json';

export default function KanbanBoard() {
  const [boardData, setBoardData] = useState(BoardData);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    
    if (!destination) return;

    const sourceColumn = boardData.find((board) => board.name === source.droppableId);
    const destColumn = boardData.find((board) => board.name === destination.droppableId);
    const draggedItem = sourceColumn.items[source.index];

    if (source.droppableId !== destination.droppableId) {
      const newSourceItems = [...sourceColumn.items];
      newSourceItems.splice(source.index, 1);

      const newDestItems = [...destColumn.items];
      newDestItems.splice(destination.index, 0, draggedItem);

      const newBoardData = boardData.map((board) => {
        if (board.name === source.droppableId) {
          return { ...board, items: newSourceItems };
        } else if (board.name === destination.droppableId) {
          return { ...board, items: newDestItems };
        }
        return board;
      });

      setBoardData(newBoardData);
    }
  };

  return (
    <div className="p-10 flex flex-col h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center">Kanban Board</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {boardData.map((board) => (
            <Droppable key={board.name} droppableId={board.name}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`bg-gray-100 rounded-md shadow-md p-4 ${
                    snapshot.isDraggingOver ? 'bg-green-100' : ''
                  }`}
                >
                  <h2 className="text-xl font-semibold mb-3 text-center">{board.name}</h2>
                  <div style={{ minHeight: '100px' }}>
                    {board.items.map((item, iIndex) => (
                      <CardItem key={item.id} data={item} index={iIndex} />
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
