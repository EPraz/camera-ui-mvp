import { EventItemProps } from "@/constants";
import React from "react";
import { Modal, Pressable, Text, View } from "react-native";

type Props = {
  showConfirm: boolean;
  setShowConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  onDelete?: ((id: string) => void) | undefined;
  event: EventItemProps;
};

const DeleteConfirmationModal = ({
  setShowConfirm,
  showConfirm,
  onDelete,
  event,
}: Props) => {
  return (
    <Modal
      transparent
      visible={showConfirm}
      animationType="fade"
      onRequestClose={() => setShowConfirm(false)}
    >
      <Pressable
        className="flex-1 bg-black/40 items-center justify-center px-6"
        onPress={() => setShowConfirm(false)}
      >
        <Pressable
          className="w-full max-w-[360px] rounded-2xl bg-white p-4"
          onPress={(e) => {
            // @ts-ignore RN Web
            e.stopPropagation?.();
          }}
        >
          <Text className="text-base font-semibold text-neutral-900">
            Delete camera?
          </Text>
          <Text className="mt-2 text-sm text-neutral-600">
            This action can not be undone.
          </Text>

          <View className="mt-4 flex-row justify-end gap-2">
            <Pressable
              onPress={() => setShowConfirm(false)}
              className="rounded-full px-4 py-2 bg-gray-100 active:bg-gray-200"
            >
              <Text className="text-sm text-neutral-800">Cancel</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setShowConfirm(false);
                onDelete?.(event.id);
              }}
              className="rounded-full px-4 py-2 bg-red-600 active:bg-red-700"
            >
              <Text className="text-sm text-white">Delete</Text>
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default DeleteConfirmationModal;
