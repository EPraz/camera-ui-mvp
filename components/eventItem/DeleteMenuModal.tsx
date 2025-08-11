import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Modal, Pressable, Text, View } from "react-native";

type Props = {
  showMenu: boolean;
  setShowMenu: (value: React.SetStateAction<boolean>) => void;
  menuPos: {
    top: number;
    right: number;
  };
  setShowConfirm: (value: React.SetStateAction<boolean>) => void;
};

const DeleteMenuModal = ({
  showMenu,
  setShowMenu,
  menuPos,
  setShowConfirm,
}: Props) => {
  return (
    <Modal
      transparent
      visible={showMenu}
      onRequestClose={() => setShowMenu(false)}
      animationType="fade"
    >
      {/* Overlay a pantalla completa: cierra al tocar fuera */}
      <Pressable
        className="flex-1 bg-transparent"
        onPress={() => setShowMenu(false)}
      >
        {/* Popover posicionado cerca del botón */}
        <View
          style={{
            position: "absolute",
            top: menuPos.top,
            right: menuPos.right,
            width: 200,
          }}
        >
          <View className="rounded-2xl bg-white p-2 border border-gray-200 shadow-md">
            <Pressable
              onPress={() => {
                setShowMenu(false);
                setShowConfirm(true);
              }}
              className="flex-row items-center gap-3 px-3 py-2.5 rounded-xl active:bg-gray-100"
            >
              <Ionicons name="trash-outline" size={18} color="#dc2626" />
              <Text className="text-sm font-medium text-neutral-900">
                Eliminar
              </Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default DeleteMenuModal;
