import { Text, View } from "react-native";
import React, { FC } from "react";
import LoadingView from "../loading-view";
import { SpacesProps } from "./types";
import styles from "./styles";

const SpacesList: FC<SpacesProps> = props => {
  const { spaces } = props;

  return spaces.length ? (
    <View style={styles.spacesListWrapper}>
      <Text style={styles.spacesListHeader}>Space Occupancy</Text>
      {spaces.map(space => (
        <View key={space.id} style={styles.spaceTileWrapper}>
          <Text style={styles.spaceTileHeader}>{space.name}</Text>
          <Text style={styles.spaceTileCount}>{space.count}</Text>
        </View>
      ))}
    </View>
  ) : (
    <LoadingView style={styles.spacesListWrapper} />
  );
};

export default SpacesList;
