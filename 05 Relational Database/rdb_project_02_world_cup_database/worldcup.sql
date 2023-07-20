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

DROP DATABASE worldcup;
--
-- Name: worldcup; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE worldcup WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';



ALTER DATABASE worldcup OWNER TO freecodecamp;

\connect worldcup

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
-- Name: games; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.games (
    game_id integer NOT NULL,
    year integer NOT NULL,
    round character varying(20) NOT NULL,
    winner_id integer NOT NULL,
    opponent_id integer NOT NULL,
    winner_goals integer NOT NULL,
    opponent_goals integer NOT NULL
);


ALTER TABLE public.games OWNER TO freecodecamp;

--
-- Name: games_game_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.games_game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.games_game_id_seq OWNER TO freecodecamp;

--
-- Name: games_game_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.games_game_id_seq OWNED BY public.games.game_id;


--
-- Name: teams; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teams (
    team_id integer NOT NULL,
    name character varying(40) NOT NULL
);


ALTER TABLE public.teams OWNER TO freecodecamp;

--
-- Name: teams_team_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.teams_team_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teams_team_id_seq OWNER TO freecodecamp;

--
-- Name: teams_team_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.teams_team_id_seq OWNED BY public.teams.team_id;


--
-- Name: games game_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.games ALTER COLUMN game_id SET DEFAULT nextval('public.games_game_id_seq'::regclass);


--
-- Name: teams team_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teams ALTER COLUMN team_id SET DEFAULT nextval('public.teams_team_id_seq'::regclass);


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.games VALUES (45, 2018, 'Final', 2764, 2765, 4, 2);
INSERT INTO public.games VALUES (46, 2018, 'Third Place', 2766, 2767, 2, 0);
INSERT INTO public.games VALUES (47, 2018, 'Semi-Final', 2765, 2767, 2, 1);
INSERT INTO public.games VALUES (48, 2018, 'Semi-Final', 2764, 2766, 1, 0);
INSERT INTO public.games VALUES (49, 2018, 'Quarter-Final', 2765, 2768, 3, 2);
INSERT INTO public.games VALUES (50, 2018, 'Quarter-Final', 2767, 2769, 2, 0);
INSERT INTO public.games VALUES (51, 2018, 'Quarter-Final', 2766, 2770, 2, 1);
INSERT INTO public.games VALUES (52, 2018, 'Quarter-Final', 2764, 2771, 2, 0);
INSERT INTO public.games VALUES (53, 2018, 'Eighth-Final', 2767, 2772, 2, 1);
INSERT INTO public.games VALUES (54, 2018, 'Eighth-Final', 2769, 2773, 1, 0);
INSERT INTO public.games VALUES (55, 2018, 'Eighth-Final', 2766, 2774, 3, 2);
INSERT INTO public.games VALUES (56, 2018, 'Eighth-Final', 2770, 2775, 2, 0);
INSERT INTO public.games VALUES (57, 2018, 'Eighth-Final', 2765, 2776, 2, 1);
INSERT INTO public.games VALUES (58, 2018, 'Eighth-Final', 2768, 2777, 2, 1);
INSERT INTO public.games VALUES (59, 2018, 'Eighth-Final', 2771, 2778, 2, 1);
INSERT INTO public.games VALUES (60, 2018, 'Eighth-Final', 2764, 2779, 4, 3);
INSERT INTO public.games VALUES (61, 2014, 'Final', 2780, 2779, 1, 0);
INSERT INTO public.games VALUES (62, 2014, 'Third Place', 2781, 2770, 3, 0);
INSERT INTO public.games VALUES (63, 2014, 'Semi-Final', 2779, 2781, 1, 0);
INSERT INTO public.games VALUES (64, 2014, 'Semi-Final', 2780, 2770, 7, 1);
INSERT INTO public.games VALUES (65, 2014, 'Quarter-Final', 2781, 2782, 1, 0);
INSERT INTO public.games VALUES (66, 2014, 'Quarter-Final', 2779, 2766, 1, 0);
INSERT INTO public.games VALUES (67, 2014, 'Quarter-Final', 2770, 2772, 2, 1);
INSERT INTO public.games VALUES (68, 2014, 'Quarter-Final', 2780, 2764, 1, 0);
INSERT INTO public.games VALUES (69, 2014, 'Eighth-Final', 2770, 2783, 2, 1);
INSERT INTO public.games VALUES (70, 2014, 'Eighth-Final', 2772, 2771, 2, 0);
INSERT INTO public.games VALUES (71, 2014, 'Eighth-Final', 2764, 2784, 2, 0);
INSERT INTO public.games VALUES (72, 2014, 'Eighth-Final', 2780, 2785, 2, 1);
INSERT INTO public.games VALUES (73, 2014, 'Eighth-Final', 2781, 2775, 2, 1);
INSERT INTO public.games VALUES (74, 2014, 'Eighth-Final', 2782, 2786, 2, 1);
INSERT INTO public.games VALUES (75, 2014, 'Eighth-Final', 2779, 2773, 1, 0);
INSERT INTO public.games VALUES (76, 2014, 'Eighth-Final', 2766, 2787, 2, 1);


--
-- Data for Name: teams; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.teams VALUES (2764, 'France');
INSERT INTO public.teams VALUES (2765, 'Croatia');
INSERT INTO public.teams VALUES (2766, 'Belgium');
INSERT INTO public.teams VALUES (2767, 'England');
INSERT INTO public.teams VALUES (2768, 'Russia');
INSERT INTO public.teams VALUES (2769, 'Sweden');
INSERT INTO public.teams VALUES (2770, 'Brazil');
INSERT INTO public.teams VALUES (2771, 'Uruguay');
INSERT INTO public.teams VALUES (2772, 'Colombia');
INSERT INTO public.teams VALUES (2773, 'Switzerland');
INSERT INTO public.teams VALUES (2774, 'Japan');
INSERT INTO public.teams VALUES (2775, 'Mexico');
INSERT INTO public.teams VALUES (2776, 'Denmark');
INSERT INTO public.teams VALUES (2777, 'Spain');
INSERT INTO public.teams VALUES (2778, 'Portugal');
INSERT INTO public.teams VALUES (2779, 'Argentina');
INSERT INTO public.teams VALUES (2780, 'Germany');
INSERT INTO public.teams VALUES (2781, 'Netherlands');
INSERT INTO public.teams VALUES (2782, 'Costa Rica');
INSERT INTO public.teams VALUES (2783, 'Chile');
INSERT INTO public.teams VALUES (2784, 'Nigeria');
INSERT INTO public.teams VALUES (2785, 'Algeria');
INSERT INTO public.teams VALUES (2786, 'Greece');
INSERT INTO public.teams VALUES (2787, 'United States');


--
-- Name: games_game_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.games_game_id_seq', 76, true);


--
-- Name: teams_team_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.teams_team_id_seq', 2787, true);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (game_id);


--
-- Name: teams teams_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_pkey PRIMARY KEY (team_id);


--
-- Name: teams teams_team_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_team_key UNIQUE (name);


--
-- Name: games games_opponent_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_opponent_id_fkey FOREIGN KEY (opponent_id) REFERENCES public.teams(team_id);


--
-- Name: games games_winner_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_winner_fkey FOREIGN KEY (winner_id) REFERENCES public.teams(team_id);


--
-- PostgreSQL database dump complete
--

