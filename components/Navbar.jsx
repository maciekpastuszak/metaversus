'use client';

import { motiom } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
  >
    navbar
  </motion.nav>
);

export default Navbar;
