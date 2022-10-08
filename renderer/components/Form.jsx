import React, { useState } from 'react'
import { Input, Button } from '@mantine/core';
import styles from '../styles/Form.module.css';
import { useId } from '@mantine/hooks';
import InputMask from 'react-input-mask';
import axios from 'axios';
import Icon from './Icon'


const Form = () => {
    const id = useId();
    const [registerInfo, setRegisterInfo] = useState({
        passport: '',
        fullName: '',
        nameOfGuardian: '',
        dob: '',
        cob: '',
        nationality: '',
        religion: '',
        relationship: '',
        occupation: '',
        stateOfOrigin: '',
        lga: '',
        address: '',
        phoneNumber: '',
        alternativePhoneNumber: '',
        lastAttendedSchool: '',
        presentClass: '',
        dateOfEntry: ''
    })
    const handleChange = (event) => {
        setRegisterInfo({ ...registerInfo, [event.target.name]: event.target.value });
    };
    const handleForm = async (e) => {
        const details = { ...registerInfo }
        try {
            await axios({
                method: 'POST',
                url: 'http://localhost:5001/api/registration',
                data: details,
                headers: { 'Content-Type': 'application/json' }
            })
            console.log(details)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <form onSubmit={handleForm} className={styles.form} encType='multipart/form'>
                <div className={styles.passport}>
                    <label >
                        <input type="file"
                            className={styles.passport}
                            name='passport'
                            value={registerInfo.passportInput}
                            onChange={handleChange}
                            hidden
                        />
                        <Icon />
                    </label>
                </div>
                <Input.Wrapper label="NAME OF STUDENT" className={styles.inputWrapper}>
                    <Input
                        name='fullName'
                        value={registerInfo.fullName}
                        onChange={handleChange}
                        required={true}
                    />
                </Input.Wrapper>
                <Input.Wrapper label="NAME OF PARENTS/GUARDIAN" className={styles.inputWrapper}>
                    <Input
                        name='nameOfGuardian'
                        value={registerInfo.nameOfGuardian}
                        onChange={handleChange}
                        required={true}
                    />
                </Input.Wrapper>
                <div className={styles.dob}>
                    <Input.Wrapper label="DATE OF BIRTH" className={styles.inputWrapper}
                    >
                        <Input
                            type='Date'
                            onChange={handleChange}
                            name='dob'
                            value={registerInfo.dob}
                            required={true}
                        />
                    </Input.Wrapper>
                    <Input.Wrapper label="CITY/COUNTRY OF BIRTH" className={styles.inputWrapper}>
                        <Input
                            name='cob'
                            onChange={handleChange}
                            value={registerInfo.cob}
                            required={true}
                        />
                    </Input.Wrapper>
                </div>
                <div className={styles.nationality}>
                    <Input.Wrapper label="NATIONALITY" className={styles.inputWrapper}>
                        <Input
                            name='nationality'
                            onChange={handleChange}
                            value={registerInfo.nationality}
                            required={true}
                        />
                    </Input.Wrapper>
                    <Input.Wrapper label="RELIGION" className={styles.inputWrapper}>
                        <Input
                            name='religion'
                            onChange={handleChange}
                            value={registerInfo.religion}
                            required={true}
                        />
                    </Input.Wrapper>
                </div>
                <Input.Wrapper label="RELATIONSHIP WITH STUDENT" className={styles.inputWrapper} name='relationship' onChange={handleChange} >
                    <Input
                        name='relationship'
                        onChange={handleChange}
                        value={registerInfo.relationship}
                        required={true}
                    />
                </Input.Wrapper>
                <Input.Wrapper label="OCCUPATION" className={styles.inputWrapper}>
                    <Input
                        name='occupation'
                        onChange={handleChange}
                        value={registerInfo.occupation}
                        required={true}
                    />
                </Input.Wrapper>
                <div className={styles.state}>
                    <Input.Wrapper label="STATE OF ORIGIN" className={styles.inputWrapper}>
                        <Input
                            name='stateOfOrigin'
                            onChange={handleChange}
                            value={registerInfo.stateOfOrigin}
                            required={true}
                        />
                    </Input.Wrapper>
                    <Input.Wrapper label="L.G.A" className={styles.inputWrapper}>
                        <Input
                            name='lga'
                            onChange={handleChange}
                            value={registerInfo.lga}
                            required={true}
                        />
                    </Input.Wrapper>
                </div>
                <Input.Wrapper label="HOME ADDRESS" className={styles.inputWrapper}>
                    <Input
                        name='address'
                        onChange={handleChange}
                        value={registerInfo.address}
                        required={true}
                    />
                </Input.Wrapper>
                <Input.Wrapper label="PHONE NUMBER OF PARENTS/GUARDIAN" className={styles.inputWrapper}>
                    <Input
                        name='phoneNumber'
                        component={InputMask}
                        mask="+234 9999999999"
                        id={id}
                        placeholder="Guardian PhoneNumber"
                        onChange={handleChange}
                        value={registerInfo.phoneNumber}
                        required={true}
                    />
                </Input.Wrapper>
                <Input.Wrapper label="ALTERNATIVE NUMBER OF PARENT/GUARDIAN" className={styles.inputWrapper}>
                    <Input
                        name='alternativePhoneNumber'
                        component={InputMask}
                        mask="+234 9999999999"
                        id={id}
                        placeholder="Guardian Alternative PhoneNumber"
                        onChange={handleChange}
                        value={registerInfo.alternativePhoneNumber}
                    />
                </Input.Wrapper>
                <Input.Wrapper label="LAST SCHOOL ATTENDED WITH DATE" className={styles.inputWrapper}>
                    <Input
                        name='lastAttendedSchool'
                        onChange={handleChange}
                        value={registerInfo.lastAttendedSchool}
                    />
                </Input.Wrapper>
                <Input.Wrapper label="CLASS" className={styles.inputWrapper} name='presentClass' onChange={handleChange} >
                    <Input
                        name='presentClass'
                        onChange={handleChange}
                        value={registerInfo.presentClass}
                        required={true}
                    />
                </Input.Wrapper>
                <Input.Wrapper label="DATE OF ENTRY" className={styles.inputWrapper} name='dateOfEntry'>
                    <Input
                        type='Date'
                        name='dateOfEntry'
                        value={registerInfo.dateOfEntry}
                        required={true}
                        onChange={handleChange}
                    />
                </Input.Wrapper>
                <div className={styles.buttonDiv}>
                    <Button type='submit' className={styles.button}>
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Form