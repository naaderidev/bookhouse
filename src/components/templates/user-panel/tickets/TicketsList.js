"use client";
import React, { useState } from "react";
import TicketCard from "./TicketCard";
import Pagination from "@/components/modules/Pagination";
import EmptyContainer from "@/components/modules/user-panel/EmptyContainer";

export default function TicketsList({ tickets }) {
  const [shownTickets, setShownTickets] = useState(tickets);
  return (
    <div className="container mx-8">
      {tickets.length === 0 ? (
        <EmptyContainer message="هنوز تیکتی ثبت نکرده اید" />
      ) : (
        <>
          {shownTickets.map((ticket) => (
            <TicketCard key={ticket._id} {...ticket} />
          ))}
          <Pagination
            items={tickets}
            setShownItems={setShownTickets}
            count={6}
            type="cms"
          />
        </>
      )}
    </div>
  );
}
