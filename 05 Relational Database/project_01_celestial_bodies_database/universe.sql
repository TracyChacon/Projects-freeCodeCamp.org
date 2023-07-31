--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO postgres;

\connect universe

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: definitions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.definitions (
    definition text NOT NULL,
    part_of_speech character varying(25),
    definitions_id integer NOT NULL,
    name character varying(30)
);


ALTER TABLE public.definitions OWNER TO postgres;

--
-- Name: definitions_definitions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.definitions_definitions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.definitions_definitions_id_seq OWNER TO postgres;

--
-- Name: definitions_definitions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.definitions_definitions_id_seq OWNED BY public.definitions.definitions_id;


--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying(30) NOT NULL,
    supermassive_black_holes_number integer,
    age_in_billions_of_years numeric(4,1),
    shape character varying(35)
);


ALTER TABLE public.galaxy OWNER TO postgres;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.galaxy_galaxy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_galaxy_id_seq OWNER TO postgres;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.galaxy_galaxy_id_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    name character varying(30) NOT NULL,
    dist_from_host_planet_in_km integer,
    gravity_m_per_sec_sq numeric(20,4),
    planet_id integer,
    gravity_sig_figs_to_use integer
);


ALTER TABLE public.moon OWNER TO postgres;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.moon_moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_moon_id_seq OWNER TO postgres;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.moon_moon_id_seq OWNED BY public.moon.moon_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    name character varying(30) NOT NULL,
    dist_from_host_star_in_au numeric(10,3),
    num_of_moons integer,
    goldilocks_zone boolean,
    has_life boolean,
    star_id integer
);


ALTER TABLE public.planet OWNER TO postgres;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.planet_planet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_planet_id_seq OWNER TO postgres;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.planet_planet_id_seq OWNED BY public.planet.planet_id;


--
-- Name: star; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    name character varying(30) NOT NULL,
    "temp(K)" integer,
    mass_as_multiple_of_sun_mass numeric(4,1),
    galaxy_id integer
);


ALTER TABLE public.star OWNER TO postgres;

--
-- Name: star_star_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.star_star_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_star_id_seq OWNER TO postgres;

--
-- Name: star_star_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.star_star_id_seq OWNED BY public.star.star_id;


--
-- Name: definitions definitions_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.definitions ALTER COLUMN definitions_id SET DEFAULT nextval('public.definitions_definitions_id_seq'::regclass);


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_galaxy_id_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_moon_id_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_planet_id_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_star_id_seq'::regclass);


--
-- Data for Name: definitions; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.definitions VALUES ('A moon is an object that orbits a planet or something else that is not a star. Besides planets, moons can circle dwarf planets, large asteroids, and other bodies. Objects that orbit other objects are also called satellites, so moons are sometimes called natural satellites.', 'noun', 4, 'moon');
INSERT INTO public.definitions VALUES ('A planet is a celestial body that (a) is in orbit around the Sun, (b) has sufficient mass for its self-gravity to overcome rigid body forces so that it assumes a hydrostatic equilibrium (nearly round) shape, and (c) has cleared the neighbourhood around its orbit.', 'noun', 3, 'planet');
INSERT INTO public.definitions VALUES ('A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity. Our galaxy, the Milky Way, also has a supermassive black hole in the middle.', 'noun', 1, 'galaxy');
INSERT INTO public.definitions VALUES ('A star is a luminous ball of gas, mostly hydrogen and helium, held together by its own gravity. Nuclear fusion reactions in its core support the star against gravity and produce photons and heat, as well as small amounts of heavier elements.', 'noun', 5, 'star');
INSERT INTO public.definitions VALUES ('The universe is everything. It includes all of space, and all the matter and energy that space contains. It even includes time itself and, of course, it includes you. Earth and the Moon are part of the universe, as are the other planets and their many dozens of moons.', 'noun', 6, 'universe');


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.galaxy VALUES (1, 'Milky Way', 1, 13.6, 'barred sprial');
INSERT INTO public.galaxy VALUES (2, 'Andromeda', 1, 10.0, 'barred sprial');
INSERT INTO public.galaxy VALUES (3, 'Canis Major Dwarf', 0, 10.0, 'irregular');
INSERT INTO public.galaxy VALUES (4, 'Draco II', 0, 10.0, 'spheroidal');
INSERT INTO public.galaxy VALUES (5, 'Tucana III', 0, 10.0, 'spheroidal');
INSERT INTO public.galaxy VALUES (6, 'Segue I', 0, 12.0, 'spheroidal');
INSERT INTO public.galaxy VALUES (7, 'Sagittarius', 0, 10.0, 'spheroidal');
INSERT INTO public.galaxy VALUES (8, 'NGC 6240', 3, 0.1, 'constantly changing');
INSERT INTO public.galaxy VALUES (9, 'Messier 87', 2, 13.2, 'elliptical');


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.moon VALUES (1, 'luna', 384400, 1.6250, 3, 4);
INSERT INTO public.moon VALUES (2, 'phobos', 6000, 0.0057, 4, 2);
INSERT INTO public.moon VALUES (3, 'deimos', 384400, 1.6250, 4, 4);
INSERT INTO public.moon VALUES (5, 'mimas', 185520, 0.0940, 6, 2);
INSERT INTO public.moon VALUES (4, 'io', 421700, 2.5200, 5, 3);
INSERT INTO public.moon VALUES (6, 'miranda', 135580, 0.0400, 7, 1);
INSERT INTO public.moon VALUES (7, 'naiad', 48220, 0.0080, 8, 1);
INSERT INTO public.moon VALUES (8, 'elara', 11704000, 0.0040, 5, 1);
INSERT INTO public.moon VALUES (9, 'phoebe', 12952000, 0.0030, 6, 1);
INSERT INTO public.moon VALUES (10, 'oberon', 583500, 0.0800, 7, 1);
INSERT INTO public.moon VALUES (11, 'neso', 979000, 0.0050, 8, 1);
INSERT INTO public.moon VALUES (12, 'ganymede', 1070400, 1.4300, 5, 3);
INSERT INTO public.moon VALUES (13, 'titan', 1221870, 1.3500, 6, 3);
INSERT INTO public.moon VALUES (14, 'titania', 436800, 0.8800, 7, 2);
INSERT INTO public.moon VALUES (15, 'triton', 354759, 1.5300, 8, 3);
INSERT INTO public.moon VALUES (16, 'enceladus', 238000, 0.1100, 6, 2);
INSERT INTO public.moon VALUES (17, 'callisto', 1882700, 0.1300, 5, 2);
INSERT INTO public.moon VALUES (18, 'proteus', 117673, 0.0300, 8, 1);
INSERT INTO public.moon VALUES (19, 'elysium', 327500, 0.1100, 6, 2);
INSERT INTO public.moon VALUES (20, 'puck', 86000, 0.0300, 7, 1);


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.planet VALUES (9, 'proxima b', 0.049, 0, true, NULL, 7);
INSERT INTO public.planet VALUES (2, 'venus', 0.387, 0, false, false, 8);
INSERT INTO public.planet VALUES (3, 'earth', 1.000, 1, true, true, 8);
INSERT INTO public.planet VALUES (4, 'mars', 1.524, 2, true, false, 8);
INSERT INTO public.planet VALUES (5, 'jupiter', 5.203, 79, false, false, 8);
INSERT INTO public.planet VALUES (6, 'saturn', 9.539, 82, false, false, 8);
INSERT INTO public.planet VALUES (7, 'uranus', 19.218, 27, false, false, 8);
INSERT INTO public.planet VALUES (8, 'neptune', 30.069, 14, false, false, 8);
INSERT INTO public.planet VALUES (1, 'mercury', 0.723, 0, false, false, 8);
INSERT INTO public.planet VALUES (10, 'polaris c', 1.200, 0, NULL, false, 1);
INSERT INTO public.planet VALUES (11, 'polaris d', 2.400, 0, NULL, false, 1);
INSERT INTO public.planet VALUES (12, 'HD 217014 b', 1.200, 0, NULL, NULL, 3);
INSERT INTO public.planet VALUES (13, 'HD 217014 c', 2.200, 0, NULL, NULL, 3);


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.star VALUES (1, 'polaris', 6050, 5.4, 1);
INSERT INTO public.star VALUES (2, 'vega', 10300, 2.1, 1);
INSERT INTO public.star VALUES (3, 'alpha andromedae', 13800, 3.6, 2);
INSERT INTO public.star VALUES (4, 'sirius', 9941, 2.1, 3);
INSERT INTO public.star VALUES (5, 'Eltanin', 3930, 10.0, 4);
INSERT INTO public.star VALUES (6, 'IRS 13E', 100000, 30.0, 5);
INSERT INTO public.star VALUES (7, 'proxima centauri', 3050, 0.1, 1);
INSERT INTO public.star VALUES (8, 'sol', 5778, 1.0, 1);


--
-- Name: definitions_definitions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.definitions_definitions_id_seq', 7, true);


--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.galaxy_galaxy_id_seq', 9, true);


--
-- Name: moon_moon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.moon_moon_id_seq', 20, true);


--
-- Name: planet_planet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.planet_planet_id_seq', 13, true);


--
-- Name: star_star_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.star_star_id_seq', 8, true);


--
-- Name: definitions definitions_definitions_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.definitions
    ADD CONSTRAINT definitions_definitions_id_key UNIQUE (definitions_id);


--
-- Name: definitions definitions_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.definitions
    ADD CONSTRAINT definitions_name_key UNIQUE (name);


--
-- Name: definitions definitions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.definitions
    ADD CONSTRAINT definitions_pkey PRIMARY KEY (definitions_id);


--
-- Name: galaxy galaxy_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_name_key UNIQUE (name);


--
-- Name: galaxy galaxy_name_key1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_name_key1 UNIQUE (name);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_name_key UNIQUE (name);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_name_key UNIQUE (name);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: star star_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_name_key UNIQUE (name);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: moon moon_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet planet_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: star star_galaxy_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_galaxy_id_fkey FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- PostgreSQL database dump complete
--

