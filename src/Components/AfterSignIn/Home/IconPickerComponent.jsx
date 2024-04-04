import React, { useState } from "react";
import IconPicker from "react-icons-picker";

export const IconPickerComponent = () => {
  const [value, setValue] = useState("FaUsers");
  return <IconPicker value={value} onChange={(v) => setValue(v)} />;
};
