// The screen showing the tasks for a given project. If this is the logged-in
// user's own project, the TasksView includes a button to  open a ManageTeam view.

import React, { useState, useEffect } from 'react';

import { View, ScrollView } from 'react-native';
import styles from '../stylesheet';

import { Overlay, Button } from 'react-native-elements';
import { ManageTeam } from '../components/ManageTeam';

import { useTasks } from '../providers/TasksProvider';
import { TaskItem } from '../components/TaskItem';
import { AddTask } from '../components/AddTask';

export function TasksView({ navigation, route }) {
  const { name } = route.params;

  const [overlayVisible, setOverlayVisible] = useState(false);

  const { tasks, createTask } = useTasks();
  useEffect(() => {
    navigation.setOptions({
      headerRight: function Header() {
        return <AddTask createTask={createTask} />;
      },
      title: `${name}'s Tasks`,
    });
  }, []);

  return (
    <ScrollView>
      {name === 'My Project' ? (
        <>
          <View style={styles.manageTeamButtonContainer}>
            <Button
              title='Manage Team'
              type='clear'
              onPress={() => setOverlayVisible(true)}
            />
          </View>
          <Overlay
            isVisible={overlayVisible}
            onBackdropPress={() => setOverlayVisible(false)}
          >
            <ManageTeam />
          </Overlay>
        </>
      ) : null}
      {tasks.map((task) =>
        task ? <TaskItem key={`${task._id}`} task={task} /> : null
      )}
    </ScrollView>
  );
}
