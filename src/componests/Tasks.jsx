import { Grid, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {useSelector } from 'react-redux';
import { HeadingPrimary } from '../shared/heading';
import Spinner from './Spinner';
import EditModal from './EditModal';
import DeleteDialog from './DeleteDialog';

const Tasks = (props) => {
    const { tasks, isLoading } = useSelector(state => state.task)

    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <HeadingPrimary variant='h4' component='h1'>{props.heading}</HeadingPrimary>
            </Grid>
            {
                tasks.map(task => (
                    <Grid
                        item
                        xs={12} md={4}
                        key={task._id}
                    >
                        <Paper sx={{
                            p: '1rem', 
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                        >
                                <Typography variant='h5' component='h2' sx={{mb: '0.75rem', color: 'grey.800'}}>{task.todo}</Typography>
                                <Typography variant='subtitle1' sx={{mb: '0.75rem', color: 'grey.700'}}>{task.description}</Typography>
                                <Stack direction='raw' justifyContent='space-between' alignItems='center'>
                                    <Stack direction='raw' alignItems='center'>
                                        <Typography>{new Date(task.createdAt).toLocaleString('en-us')}</Typography>
                                        <EditModal taskId={task._id} status={task.status} />
                                        <DeleteDialog taskId = {task._id}/>
                                    </Stack>
                                    <Box
                                        component='div'
                                        sx={{
                                            backgroundColor: 'primary.main',
                                            borderRadius: '100px',
                                            p: '4px 16px',
                                            lineHeight: '0px',
                                            color: 'primary.contrastText',
                                            fontWeight: '600',
                                            fontSize: '18px'
                                        }}>
                                        <Typography variant='caption' align='center'>{task.status}</Typography>
                                    </Box>
                                </Stack>
                        </Paper>
                    </Grid>
                ))
            }
        </Grid >
    );
};

export default Tasks;