import React, { useState, useRef, useEffect } from "react";
import { Search } from ".";
import "./Results.css";

export default function MainLayout() {
  return (
    <div className="main">
      <Search />
    </div>
  );
}
