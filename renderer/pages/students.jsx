import { useEffect, useState } from "react";
import styles from '../styles/Student.module.css'
import Head from 'next/head'
import axios from 'axios'
import {
  Avatar,
  Table,
  Group,
  Text,
  ActionIcon,
  ScrollArea,
} from '@mantine/core';
import { IconTrash } from '@tabler/icons';
import { Input } from '@mantine/core'



const students = () => {
  const [profileData, setProfileData] = useState([])
  const [filterData, setFilterData] = useState('')

  const url = 'http://localhost:5001/api/students'
  useEffect(() => {
    async function getStudent() {
      const res = await axios.get(url)
      const studentsProfile = res.data.data
      setProfileData(studentsProfile)
    }
    getStudent()
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios({
        method: 'DELETE',
        url: 'http://localhost:5001/api/deleteStudent/' + id,
        headers: { 'Content-Type': 'application/json' }
      })
      const results = profileData.filter((result) => result._id !== id)
      setProfileData(results)
    } catch (err) {
      console.log(err)
    }
  }
  const rows = profileData.filter((val) => {
    if (filterData == '') return val
    else if (val.fullName.toLowerCase().includes(filterData.toLowerCase())) {
      return val
    }
  }).map((student, id) => (
    <tr key={id}>
      <td>
        <Group spacing="sm">
          <Avatar size={30} src={student.avatar} radius={30} />
          <Text size="sm" weight={500}>
            {student.fullName}
          </Text>
        </Group>
      </td>
      <td>
        <Text size="sm" color="dimmed">
          {student.presentClass}
        </Text>
      </td>
      <td>
        <Text size="sm" color="dimmed">
          {student.dateOfEntry}
        </Text>
      </td>
      <td>
        <Text size="sm" color="dimmed">
          {student.phoneNumber}
        </Text>
      </td>
      <td>
        <Group spacing={0} position="right">
          <ActionIcon color="red">
            <IconTrash size={16} stroke={1.5}
              onClick={() => handleDelete(student._id)}
            />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ))
  return (
    <>
      <Head>
        <title>
          DSMC | Home
        </title>
      </Head>
      {
        <div className={styles.body}>
          <Input placeholder='Search Student'
            onChange={(e) => setFilterData(e.target.value)}
          />
          <ScrollArea>
            <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Present Class</th>
                  <th>Date Of Entry</th>
                  <th>Phone Number</th>
                  <th />
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </ScrollArea>
        </div>
      }
    </>
  )
}

export default students
