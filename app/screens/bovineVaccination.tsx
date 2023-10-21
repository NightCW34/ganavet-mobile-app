import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Agenda } from "react-native-calendars";

const timeToString = (time: string | number | Date) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

const Schedule: React.FC = () => {
  const [items, setItems] = useState({});

  const loadItems = (day: { timestamp: number }) => {
    setTimeout(() => {
      const newItems: { [key: string]: { name: string; height: number }[] } = {
        ...items,
      }; // Copia los elementos existentes

      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!newItems[strTime]) {
          newItems[strTime] = [] as { name: string; height: number }[];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            newItems[strTime].push({
              name: "Item for " + strTime + " #" + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }

      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item: any) => {
    return (
      <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
        <View
          style={{ padding: 10, backgroundColor: "#fff", borderRadius: 10 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>{item.name}</Text>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#3498db",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff" }}>J</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={"2023-10-21"}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Schedule;