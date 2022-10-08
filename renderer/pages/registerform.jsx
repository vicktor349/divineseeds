import React from 'react';
import Head from 'next/head';
import styles from '../styles/Register.module.css'
import { Avatar } from '@mantine/core';
import Form from '../components/Form';
import Footer from '../components/Footer';



function Dashboard() {
    return (
        <>
            <Head>
                <title>DSMC | REGISTRATION FORM</title>
            </Head>
            <div className={styles.home}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <Avatar className={styles.avatar} radius="xl" />
                    </div>
                    <div className={styles.headerText}>
                        <p className={styles.schoolNameText}>DIVINESEEDS MODEL COLLEGE</p>
                        <p className={styles.schoolAddress}>28, Baba ladan Street, Ruga Juli Mararaba, Nasarawa State.</p>
                    </div>
                    <div className={styles.text}>
                        <p className={styles.regFormText}>REGISTRATION FORM</p>
                    </div>
                </div>
                <div className={styles.formDiv}>
                    <Form />
                </div>
            </div>
            <Footer />
        </>
    ); x
};

export default Dashboard;