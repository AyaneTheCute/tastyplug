// ==UserScript==
// @name            TastyPlug
// @namespace       https://tastyplug.tastycat.org
// @description     a plug.dj extension
// @icon            https://tastyplug.tastycat.org/images/icon128.png
// @include         https://plug.dj/*
// @exclude         https://plug.dj/dashboard
// @exclude         https://plug.dj/privacy
// @exclude         https://plug.dj/terms
// @exclude         https://plug.dj/ba
// @exclude         https://plug.dj/plot
// @exclude         https://plug.dj/about
// @exclude         https://plug.dj/team
// @exclude         https://plug.dj/jobs
// @exclude         https://plug.dj/partners
// @exclude         https://plug.dj/press
// @exclude         https://plug.dj/purchase
// @exclude         https://plug.dj/subscribe
// @exclude         https://plug.dj/@/*
// @exclude         https://plug.dj/_/*
// @author          Chip (git) & Olivier Houle (Fungus)
// @version         3.8.0
// @downloadURL     https://tastyplug.tastycat.org/tastyplug.user.js
// @updateURL       https://tastyplug.tastycat.org/tastyplug.meta.js
// ==/UserScript==

/*
 * TastyPlug, a plug.dj extension
 * Original work Copyright (c) 2013-2015 by Olivier Houle (Fungus)
 * Legacy Chat option made by Git! Tastymojis by Nackloose and Fungus.
 * Please do not copy or modify without my (Oliver Houle's) permission.
 *
 * Modified work Copyright (C) 2016 Chip (git)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var tastyplug = document.createElement('script');
tastyplug.id = 'tastyplug-bootstrap';
tastyplug.src = 'https://tastyplug.tastycat.org/tastyplug.min.js';
tastyplug.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(tastyplug);