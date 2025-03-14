
import { Board, Category, Thread, Post } from '../types';
import { format } from 'date-fns';

// Generate a random number for post IDs
const generatePostId = () => Math.floor(10000000 + Math.random() * 90000000);

// Create categories
export