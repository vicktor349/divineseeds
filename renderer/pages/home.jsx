import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Input, PasswordInput, Button } from '@mantine/core';
import { IconLock, IconUser, IconEyeOff, IconEyeCheck } from '@tabler/icons';
import { useRouter } from 'next/router'
import axios from 'axios'

const home = () => {
  const router = useRouter()
  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleForm = async (e) => {
    e.preventDefault();
    const details = { ...user }
    try {
      const res = await axios({
        method: 'POST',
        url: 'http://localhost:5001/api/signin',
        data: details,
        headers: { 'Content-Type': 'application/json' }
      })
      if (res.status == 200 && res.statusText === 'OK') {
        router.replace('/students')
      }
    } catch (err) {
      console.log(err)
    }

  }
  return (

    <>
      <Head>
        <title>DSMC | Login</title>
      </Head>
      <div>
        <div className={styles.body}>
          <div className={styles.form}>
            <form onSubmit={handleForm}>
              <Input.Wrapper className={styles.usernameInput}>
                <Input
                  icon={<IconUser size={16} />}
                  placeholder="Enter Username"
                  name='username'
                  value={user.username}
                  onChange={handleChange}
                />
              </Input.Wrapper>
              <PasswordInput
                className={styles.passwordInput}
                icon={<IconLock size={16} />}
                placeholder="Enter Password"
                visibilityToggleIcon={({ reveal, size }) =>
                  reveal ? <IconEyeOff size={size} /> : <IconEyeCheck size={size} />
                }
                name='password'
                value={user.password}
                onChange={handleChange}
              />
              <Button type='submit' fullWidth variant="outline" className={styles.button}>
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default home